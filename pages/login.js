import LoginCard from "@/src/components/loginCard/loginCard";
import styles from '../styles/login.module.css';
import Input from "@/src/components/input/input";
import Button from "@/src/components/button/button";
import Link from "next/link";


export default function LoginPage() {
    return(
    <div className={ styles.background }>
        <LoginCard title="Entre em sua conta" >
            <form className={ styles.form }>
                <Input type="text" placeholder="Seu e-mail" />
                <Input type="password" placeholder="Sua senha" />
                <Button>Entrar</Button>
                <Link href="/cadastro">Ainda não possui conta?</Link>
            </form>
        </LoginCard>
    </div>
    );

}