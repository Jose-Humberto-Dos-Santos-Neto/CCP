import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Principal: React.FC = () => {
  const [commentText, setCommentText] = useState('');
  const [allComments, setAllComments] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get('http://localhost:8080/v1/ccp/comentarios');
      setAllComments(response.data);
      setError('');
    } catch (error) {
      console.error('Error fetching comments:', error);
      setError('Erro ao buscar comentários.');
    }
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentText(event.target.value);
  };

  const handleCommentSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8080//v1/ccp/postagem', { text: commentText });
      fetchComments();
      setCommentText('');
      setError('');
    } catch (error) {
      console.error('Error adding comment:', error);
      setError('Erro ao adicionar comentário.');
    }
  };

  const handleDeleteComment = async (id: string) => {
    try {
      await axios.delete(`http://localhost:8080/v1/ccp/comentarios/${id}`);
      fetchComments();
      setError('');
    } catch (error) {
      console.error('Error deleting comment:', error);
      setError('Erro ao excluir comentário.');
    }
  };

  return (
    <div>
      <h1>Página de Postagem</h1>
      <div>
        <h2>Comentários</h2>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <ul>
          {allComments.map((comment: any) => (
            <li key={comment._id}>
              {comment.text}
              <button onClick={() => handleDeleteComment(comment._id)}>Excluir</button>
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleCommentSubmit}>
        <input type="text" value={commentText} onChange={handleCommentChange} placeholder="Adicione um comentário" />
        <button type="submit">Adicionar Comentário</button>
      </form>
    </div>
  );
};

export default Principal;
