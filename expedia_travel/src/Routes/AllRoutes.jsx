import { Routes, Route } from 'react-router-dom'
import AllUsersPage from './AllUsersPage';
import SingleUserPage from './SingleUserPage';
import SuccessPage from './SuccessPage';
import Login from './Login';
import PrivateRouter from '../Components/PrivateRouter';
import FlightSearch from './FlightSearch';
import Home from './Home';
import Stays from './Stays';

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={
                    <PrivateRouter>
                        <Home />
                    </PrivateRouter>
                }
                />
                <Route
                    path={'/users'}
                    element={
                        <PrivateRouter>
                            <AllUsersPage />
                        </PrivateRouter>
                    }
                />
                <Route
                    path='/users/:user_id'
                    element={
                        <PrivateRouter>
                            <SingleUserPage />
                        </PrivateRouter>
                    }
                />
                <Route
                    path={'/flights'}
                    element={
                        <PrivateRouter>
                            <FlightSearch />
                        </PrivateRouter>
                    }
                />
                <Route
                    path={'/stays'}
                    element={
                        <PrivateRouter>
                            <Stays />
                        </PrivateRouter>
                    }
                />
                <Route path='/success' element={<SuccessPage />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </div>
    )
}

export default AllRoutes;