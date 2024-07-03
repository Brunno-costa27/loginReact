import logo from '../assets/image.png'
import google from '../assets/google.png'

import { Buttom } from './Buttom'

export function Login() {

    return (
        <div className='w-full flex font-archivo'>
            {/* Imagem */}
            <div className='hidden sm:flex sm:w-full'>
                <img src={logo} alt="" />
            </div>

            {/* form */}
            <div className='w-full flex flex-col h-screen justify-center items-center'>
                <form action="" className='w-full  flex flex-col p-10  sm:p-28'>
                    <div>
                        <p className='text-sm sm:text-base'>Bem-vindo de volta</p>
                        <p className='text-base sm:text-xl font-bold'>Faça login na sua conta</p>
                    </div>

                    <div className='flex flex-col mt-5'>
                        <label className='py-2 text-sm sm:text-base' htmlFor="">E-mail</label>
                        <input
                            className='p-2 bg-[#F7FAFC] border border-[#E8E8E8] outline-none placeholder-[#656769]'
                            type="text"
                            placeholder='examplo@gmail.com'
                        />
                        <label className='py-1 text-sm sm:text-base' htmlFor="">Senha</label>
                        <input
                            type="password"
                            placeholder='01234567...'
                            className='p-2 bg-[#F7FAFC] border border-[#E8E8E8] outline-none placeholder-[#656769]'
                        />
                    </div>

                    <div className='flex justify-between items-center py-2'>
                        <div className='flex gap-2'>
                            <input type="radio" />
                            <p className='text-[#1A202C] text-sm sm:text-base'>Lembre de mim</p>
                        </div>

                        <div>
                            <a className='text-[#1E9E6A] text-sm sm:text-base' href="#">Esqueceu sua senha?</a>
                        </div>
                    </div>

                    <div className='w-full mt-6'>
                        <div className='w-full flex flex-col gap-5'>
                            <div className='w-full'>
                            <Buttom
                                title='Entra na conta'
                                icon=''
                                color='green'
                            />
                            </div>

                            <div className='w-full'>
                            <Buttom
                                title='Ou faça login com o Google '
                                icon={google}
                                color='stone'
                            />
                            </div>
                        </div>  

                        <div className='flex justify-center mt-10 gap-1'>
                            <p className='text-sm sm:text-lg'>Não tem uma conta?</p>
                            <a className='text-sm sm:text-lg text-green-600' href="">Cadastra-se</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}