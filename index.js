import express from 'express'
import path  from 'path'
import { config } from 'dotenv'
import { initiateApp } from './Src/Utils/InitiateApp.js';
config({ path: path.resolve("./Config/config.env") });
const app = express()
// app.use(express.urlencoded({ extended: true }))
initiateApp(app,express)