import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { isAuthenticated, setAuthToken } from '@/lib/auth';
import { login } from '@/use-cases/login';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

const loginFormSchema = z.object({
  username: z.string().min(1, 'O campo de usuário é obrigatório'),
  password: z.string().min(1, 'O campo de senha é obrigatório'),
});

type LoginForm = z.infer<typeof loginFormSchema>;

export function Login() {
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate('/app/dashboard');
    }
  }, []);

  const loginForm = useForm<LoginForm>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = async (values: LoginForm) => {
    setIsAuthenticating(true);
    try {
      const response = await login(values.username, values.password);

      const { token } = response.data;

      setAuthToken(token);

      navigate('/app/dashboard');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response.status === 401) {
        loginForm.setError('root', {
          message: 'Credenciais inválidas',
        });
      } else {
        loginForm.setError('root', {
          message:
            'Houve um problema ao tentar fazer o login. Tente novamente mais tarde',
        });
      }
    } finally {
      setIsAuthenticating(false);
    }
  };

  return (
    <div className="py-10 lg:py-16">
      <div className="flex justify-center">
        <Logo />
      </div>

      <div className="mt-16">
        <div className="flex flex-col gap-2 w-72 md:w-full">
          <h1 className="text-2xl font-bold lg:text-4xl text-purple-400">
            Entre na sua conta
          </h1>
          <p>Vamos organizar seu orçamento juntos</p>
        </div>

        <Form {...loginForm}>
          <form
            onSubmit={loginForm.handleSubmit(onSubmit)}
            className="mt-6 flex flex-col gap-4"
          >
            <FormField
              control={loginForm.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Usuário</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-transparent" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={loginForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      className="bg-transparent"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {loginForm.formState.errors.root?.message && (
              <p className="text-destructive">
                {loginForm.formState.errors.root?.message}
              </p>
            )}

            <Button
              type="submit"
              className="rounded-full mt-2"
              disabled={isAuthenticating}
            >
              Entrar
              {isAuthenticating && <Loader2 className="animate-spin" />}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
