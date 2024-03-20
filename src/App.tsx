import "./App.css";

const MeuBotao = (props: any) => {
    return <button>{props.titulo}</button>;
}

const Usuario = (props:any) => {
  return (<h3>{props.nome}</h3>);
}

const ListaDeTarefas = (props: any) => {
  return (
    <>
      <h4>Tarefas como lista de objetos</h4>
      <ul>
        {
          props.dados.map((item: any) => {
            return <ItemTarefa key={item.id} titulo={item.titulo} />
          })
        }
      </ul>
    </>
  );
}

const ItemTarefa = (props: any) => {
  return (<li>{props.titulo}</li>);
}

const App = () => {
  const usuario = {nome: "minora"};
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
      <div className="aplicacao">
        <h1>The color brothers - {usuario.nome}</h1>

        {
          usuario ? 
          (<Usuario nome={usuario.nome} />) :
          (<MeuBotao titulo="login"/>)
        }
        {
          !usuario && (<MeuBotao titulo="signin"/>)
        }

        <h4>Tarefas como lista de string</h4>
        <ul>
          {
            tarefas.map((item, indice) => {
              return (<li key={indice}>{item}</li>)
            })
          }
        </ul>
        <ListaDeTarefas dados={tarefasMundoReal}/>
      </div>
    );
  }
  
  export default App;