import "./App.css";

const MeuBotao = (props: any) => {
    return <button>{props.titulo}</button>;
}

const Usuario = (props:any) => {
  return <h1>{props.nome}</h1>
}

const App = () => {
  const usuario = {nome: "minora"}
  const tarefas = [
    'brails',
    'rabisl'
  ];
  const tarefasMundoReal =[
    {
      id:1,
      titulo : "brasil",
      concluido : false,
    },
    {
      id:2,
      titulo : "GAA",
      concluido : true,
    }
  ];
    return (
      <style>
        {estilo}
      <style/>
      <div className="aplicacao">
        <h1>The color brothers - 
          {
            nome = "minora";
            nome
          }
        </h1>

        {
          usuario ? (<Usuario nome={Usuario.nome} />) :
          (<MeuBotao titulo="login"/>)
        }
        {
          !usuario && (<MeuBotao titulo="signin"/>)
        }

        <MeuBotao titulo="I'm saturation"/>
        <MeuBotao titulo="I'm hue"/>
        <MeuBotao titulo="I'm brightness"/>
        {
          tarefas.map(
            (item, indice) => {
               return (<li key={indice} >{item}</li>)
              }
          )
        }
      </div>
    );
  }
  
  export default App;