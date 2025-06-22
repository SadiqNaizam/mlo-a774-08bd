import React from 'react';

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LoginCardProps {
  className?: string;
}

const LoginCard: React.FC<LoginCardProps> = ({ className }) => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle login logic here.
    console.log('Login attempt with:', { email, password });
  };

  return (
    <Card className={cn("w-[350px] max-w-full bg-card text-card-foreground shadow-xl", className)}>
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-auto bg-transparent p-0 border-0 border-b border-input rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-b-primary"
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="password" className="text-sm font-medium text-muted-foreground">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-auto bg-transparent p-0 border-0 border-b border-input rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-b-primary"
              />
            </div>
          </div>
          <div className="text-right -mt-4">
            <Button variant="link" type="button" className="p-0 h-auto text-sm font-normal text-muted-foreground hover:text-primary">
              Forgot Password
            </Button>
          </div>
          <Button type="submit" className="w-full bg-accent hover:bg-accent/90 rounded-lg text-base font-semibold py-2.5">
            Login
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        <p className="w-full text-center text-sm text-muted-foreground">
          Don't have an account?{' '}
          <Button variant="link" type="button" className="p-0 h-auto text-primary font-semibold">
            SignUp
          </Button>
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginCard;
