export default function Contact() {
  return (
      <div className='text-center font-jost'>
        
        <form className="px-7 h-screen grid justify-center items-center">

          <div className="grid gap-6" id="form">

            <h1 className="text-2xl">Contact</h1>

            <div className="w-full flex gap-3">
              
              <input className="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[#035ec5] border-[1px]" type="text" placeholder="First Name" id="First-Name" name="First-Name" required />
              
              <input className="p-3 capitalize shadow-2xl glass w-full outline-none focus:border-solid focus:border-[#035ec5] border-[1px]" type="text" placeholder="Last Name" id="Last-Name" name="Last-Name" /> 
            </div>

            <div className="grid gap-6 w-full">
              <input className="p-3 shadow-2xl glass w-full outline-none focus:border-solid focus:border-[#035ec5] border-[1px]" type="Email" placeholder="Email" id="Email" name="email" /> 
            </div>
          
            <div className="flex gap-3 h-[10rem]">
              <textarea className="p-3 shadow-2xl glass w-full outline-none focus:border-solid focus:border-[#035ec5] border-[1px]">
              </textarea>
            </div>
          
            <button className=" glass w-full p-3 focus:border-white border-[1px] hover:text-indigo-200 font-bold" type="submit">Submit</button>
          </div>
        </form>

      
      </div>
  )
}
