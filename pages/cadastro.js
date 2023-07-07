import Button from "@/src/components/button/button";
import Input from "@/src/components/input/input";
import LoginCard from "@/src/components/loginCard/loginCard";
import Link from "next/link";
import styles from "../styles/Cadastro.module.css";

export default function CadastroPage() {
  return (
    <div className={styles.background}>
      <LoginCard title="Crie sua conta">
        <form className={styles.form}>
          <Input type="text" placeholder="Nome" />
          <Input type="text" placeholder="Seu e-mail" />
          <Input type="password" placeholder="Sua senha" />
          <Button>Cadastrar</Button>
          <Link href="/login">Já possui conta?</Link>
        </form>
      </LoginCard>
    </div>
  );
}
