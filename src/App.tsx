import './styles/global.css'
import { Checkbox } from './components/Checkbox'
import { Logo } from './components/Logo'
import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import { Envelope, Lock} from 'phosphor-react'
import { Button } from './components/Button'


function App() {
  
  return(
  <div className='w-screen h-screen flex items-center flex-col justify-center bg-grey-900  text-grey-100 '>
  
  <header className='flex flex-col items-center'> 
    <Logo />
    <Heading size='lg' className='mt-4'>Ignite Lab</Heading>
    <Text size='lg' className='text-grey-400 mt-3'>Faça login e comece a usar!</Text>
  </header>

  <form className='flex gap-4 flex-col items-stretch  w-full max-w-sm mt-10'>

    <label htmlFor='email' className='font-semibold flex flex-col gap-3'>
       <Text> Endereço de e-mail</Text>
       <TextInput.Root>
        <TextInput.Icon>
          <Envelope />
        </TextInput.Icon>
        <TextInput.Input  type='email' id='email' placeholder='Digite seu e-mail' />
       </TextInput.Root>
    </label>

    <label htmlFor='password' className='font-semibold flex flex-col gap-3'>
       <Text> Sua senha</Text>
       <TextInput.Root>
        <TextInput.Icon>
         <Lock />
        </TextInput.Icon>
        <TextInput.Input type='password' id='password' placeholder='******' />
       </TextInput.Root>
    </label>

    <label className='flex items-center gap-2	' htmlFor="remember">
      <Checkbox id='remember' />
      <Text size='sm' className='text-grey-200'>Lembrar de mim por 30 dias</Text>
    </label>
    <Button type='submit' className='mt-4'>Entrar na plataforma</Button>

    </form>

    <footer className='flex flex-col items-center gap-4 mt-8'>
    
    <Text asChild size='sm'> 
    <a  className='text-grey-400 underline hover:text-grey-200' href="#">Esqueceu sua senha?</a>
    </Text>
    
    <Text asChild size='sm'> 
    <a  className='text-grey-400 underline hover:text-grey-200' href="#">Não possui conta? crie uma agora!</a>
    </Text>
    
    </footer>

  </div>
  )
}

export default App
