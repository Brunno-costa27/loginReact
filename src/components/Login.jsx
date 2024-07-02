import logo from '../assets/image.png'

export function Login(){

    return (
        <div className='flex'>
            {/* Imagem */}
            <div className='w-full'>
                <img src={logo} alt="" />
            </div>

            {/* form */}
            <div className='w-full flex flex-col justify-center items-center p-10  '>
                <form action="" className='flex flex-col border border-black'>
                    <p>Bem-vindo de volta</p>
                    <p>Faça login na sua conta</p>

                    <div className='flex flex-col'>
                        <label htmlFor="">E-mail</label>
                        <input type="text" placeholder='examplo@gmail.com' />
                        <label htmlFor="">Senha</label>
                        <input type="password" placeholder='01234567...' />
                    </div>
                </form>
            </div>
        </div>
    )
}