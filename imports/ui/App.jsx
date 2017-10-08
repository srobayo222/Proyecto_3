import React, { Component } from 'react';
import { LoginButtons } from 'meteor/okgrow:accounts-ui-react';
import Formulario from "./Formulario.jsx";
import SimpleProyect from "./Proyecto.jsx";
import TrackerReact from "meteor/ultimatejs:tracker-react";

Proyectos = new Mongo.Collection("proyectos");

export default class App extends TrackerReact(Component) {

  proyectos () {
    return Proyectos.find().fetch();
  }

  render() {
    let res = this.proyectos();
    console.log(res);
    if(res.length < 1)
    {
      return(<div>Loading</div>);
    }
    return (
      <div className="container">
        <header>
          <h1>Proyect Score</h1>
        <ul>
          <LoginButtons />
        </ul>
        </header>
        <main>
          <Formulario />
          <div>
            <h2>Proyects</h2>
            <ul>
              {this.proyectos().map( (proyecto)=>{
                return <SimpleProyect proyecto={proyecto} />
              })}
            </ul>
          </div>
        </main>
      </div>
    );
  }
}
