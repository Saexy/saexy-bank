import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"

const AppRoutes = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path='' exact element={<Home />} />
                <Route path='/login' exact element={<Login />} />
            </Routes>
        </Router>
    )
}
 
export default AppRoutes;