import { FC } from 'react';
import styles from './Teacher.module.scss';

interface TeacherProps {
  idProf: number;
  firstName: string;
  lastName: string;
}

const TeacherComponent: FC<TeacherProps> = ({ idProf, firstName, lastName }) => (
  <div className={styles.Teacher}>
    <div className={styles.idProf}>{idProf}</div>
    <div className={styles.firstName}>{firstName}</div>
    <div className={styles.lastName}>{lastName}</div>
  </div>
);

export default TeacherComponent;
