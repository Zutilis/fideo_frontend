import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { apiFetch } from './services/teacherService'
import { Teacher } from './models/teacher'
import TeacherComponent from './components/teacher/TeacherComponent'

function App() {
  const [count, setCount] = useState(0);
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await apiFetch("http://localhost:5148/teachers/");
        setTeachers(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx </code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        {teachers.map((teacher: Teacher, index) => {
          console.log(teacher);
          return <TeacherComponent 
            idProf={teacher.idProf} 
            firstName={teacher.firstName} 
            lastName={teacher.lastName}></TeacherComponent>
        })}
      </div>
    </>
  )
}

export default App
