import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Link } from "react-router-dom";
import { Card, Button, Container } from "react-bootstrap";

export default function Home() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    api.get("/alunos").then((res) => setStudents(res.data));
  }, []);

  return (
    <Container className="app-container">
      <header className="app-header">
        <a className="brand" href="/">
          <img src="/vite.svg" alt="logo" />
          <h1>Lista de Alunos</h1>
        </a>
      </header>

      <p className="page-subtitle">Consome a API pública de alunos — clique em "Ver Detalhes" para mais informações.</p>

      <div className="list-grid">
        {students.map((aluno) => (
          <Card key={aluno.id} className="student-card">
            <Card.Body>
              <Card.Title className="card-title">{aluno.nome}</Card.Title>
              <Card.Text className="card-text">{aluno.curso || "Curso não informado"}</Card.Text>
              <Link to={`/aluno/${aluno.id}`}>
                <Button className="btn-primary">Ver Detalhes</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}