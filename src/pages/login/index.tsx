/* eslint-disable no-alert */
import React, { useCallback, useEffect, useRef } from 'react';

import { useAuth } from '@contexts/auth';
import { FormHandles } from '@unform/core';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import * as Yup from 'yup';

import { DefaultButton } from '@components/Buttons';
import { InputHandles } from '@components/Form/DefaultInput';
import Form from '@components/Form/Form';
import Input from '@components/Input';
import PasswordInput from '@components/PasswordInput';

import { StyledForm, FormTitle, ForgotPassword, CreateAccount } from './styles';

interface FormSubmitData {
  email: string;
  password: string;
}

const schema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Este campo é obrigatório'),
  password: Yup.string().required('Este campo é obrigatório'),
});

const Login: React.FC = () => {
  const authContext = useAuth();
  const router = useRouter();

  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<InputHandles>(null);
  const passwordInputRef = useRef<InputHandles>(null);

  const handleFormSubmit = useCallback(
    async (formData: FormSubmitData) => {
      const { email, password } = formData;

      const { error } = await authContext.signIn({ email, password });

      if (error) {
        alert(error.message);
      }
    },
    [authContext]
  );

  useEffect(() => {
    if (authContext.signed) {
      router.push('/home');
    }
  }, [authContext.signed, router]);

  useEffect(() => {
    emailInputRef.current.focus();
  }, []);

  return (
    <Form ref={formRef} as={StyledForm} schema={schema} onSubmit={handleFormSubmit}>
      <FormTitle>Faça seu login</FormTitle>

      <Input ref={emailInputRef} name="email" placeholder="Digite seu email" />
      <PasswordInput ref={passwordInputRef} name="password" placeholder="Digite sua senha" type="password" />

      <ForgotPassword href="/#">Esqueci minha senha</ForgotPassword>

      <DefaultButton type="submit">ENTRAR</DefaultButton>

      <Link href="/createAccount">
        <CreateAccount href="/createAccount">
          Não tem conta?
          <span> Crie uma!</span>
        </CreateAccount>
      </Link>
    </Form>
  );
};

export default Login;
