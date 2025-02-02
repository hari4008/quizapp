import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Quiz from '../pages/Quiz/Quiz'
// import QuizStart from '../pages/QuizStart/QuizStart'
// import QuizQuestion from '../pages/QuizQuestion/QuizQuestion'
// import QuizSummary from '../pages/QuizSummary/QuizSummary'
import PrivateRoute from './PrivateRoutes'

const AppRoutes = () => {
    return (
        <>
            <Routes>
                {/* <Route path='/login' element={<Login />} /> */}
                <Route path='/' element={<Quiz />} />
                {/* <Route path='/start' element={<QuizStart />} /> */}
                {/* <Route path='/question' element={<QuizQuestion />} /> */}
                {/* <Route path='/summary' element={<QuizSummary />} /> */}
                <Route element={<PrivateRoute />}>
                    {/* <Route path='/checkout' element={<CheckOut />} /> */}
                    {/* <Route path='/orderhistory' element={<OrderHistory />} /> */}
                </Route>
            </Routes>
        </>
    )
}

export default AppRoutes