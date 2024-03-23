import { useState } from "react";
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
  const usuario = {nome: "infoweb"};
  const [tarefas, setTarefas] = useState([
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
  ]);
  const [tarefa, setTarefa] = useState("");

  const listenClicarBotao = () => {
    console.log("clicou!");
    console.info(tarefa);
    const objeto = {
      id: tarefas.length + 1,
      titulo: tarefa,
      concluido: false,
    }
    console.info(objeto)
    setTarefas([
      ...tarefas,
      objeto
    ]);
    setTarefa("");
  }
  const listenModificarTexto = (evento: any) => {
    setTarefa(evento.target.value);
  }
    return (
      <div className="aplicacao">
        <h1>Receba? {usuario && (["- ", usuario.nome])}</h1>

        {
          usuario ? 
          (<Usuario nome={usuario.nome} />) :
          (<MeuBotao titulo="login"/>)
        }
        {
          !usuario && (<MeuBotao titulo="signin"/>)
        }

        <div>
          <label htmlFor="tarefa">escreva o nome da tarefa: </label>
          <input placeholder="digite uma tarefa" type="text" value={tarefa} onChange={listenModificarTexto} />
          <button onClick={listenClicarBotao}>Enviar</button>
        </div>
        <ListaDeTarefas dados={tarefas} />

        {/*<h4>Tarefas como lista de string</h4>
        <ul>
          {
            tarefas.map((item, indice) => {
              return (<li key={indice}>{item}</li>)
            })
          }
        </ul>
        <ListaDeTarefas dados={tarefasMundoReal}/>*/}
        </div>
    );
  }
  
  export default App;