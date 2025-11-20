import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../services/api";
import { Container, Button } from "react-bootstrap";

export default function StudentDetails() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    api.get(`/alunos/${id}`).then((res) => setStudent(res.data));
  }, [id]);

  if (!student) return <div className="loading">Carregando...</div>;

  return (
    <Container className="app-container">
      <header className="app-header">
        <a className="brand" href="/">
          <img src="/vite.svg" alt="logo" />
          <h1>Detalhes do Aluno</h1>
        </a>
      </header>

      <div className="details-card">
        <div>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <h3 style={{margin:0}}>{student.nome}</h3>
            <Link to="/"><Button className="btn-primary">Voltar</Button></Link>
          </div>

          <div className="details-row">
            <div>
              <div className="details-key">Email</div>
              <div className="details-value">{student.email || "—"}</div>
            </div>

            <div>
              <div className="details-key">Curso</div>
              <div className="details-value">{student.curso || "—"}</div>
            </div>

            <div>
              <div className="details-key">Matricula</div>
              <div className="details-value">{student.matricula || "—"}</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}