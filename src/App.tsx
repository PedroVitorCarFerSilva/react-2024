import "./App.css";

const MeuBotao = (props: any) => {
    return <button>{props.titulo}</button>;
}

const App = () => {
    return (
      <div className="aplicacao">
        <h1>The color brothers</h1>
        <MeuBotao titulo="I'm saturation"/>
        <MeuBotao titulo="I'm hue"/>
        <MeuBotao titulo="I'm brightness"/>
      </div>
    );
  }
  
  export default App;