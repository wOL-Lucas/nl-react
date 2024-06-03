const Form = () => {
  return (
    <form className="flex flex-col gap-3">
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="name">Nome</label>
        <input type="text" placeholder="digite o seu nome" className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"/>
      </div>
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="email">Email</label>
        <input type="email" placeholder="digite o seu email" className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"/>
      </div>
      <div className="flex flex-col">
        <a href="#" className="text-xs underline mb-2">Leia os termos</a>
        <div className="flex gap-2 items-center">
          <input type="checkbox"/>
          <label className="text-sm" htmlFor="agree">Concordo com os termos</label>
        </div> 
      </div>
      <button type="submit" className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white">Inscrever</button>
    </form>
  );
};


export default Form;