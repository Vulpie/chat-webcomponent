import '../css/main.scss'
import Controller from './Controller/Controller'
import Model from './Model/Model'
import View from './View'

const app = new Controller(new View(), new Model())
