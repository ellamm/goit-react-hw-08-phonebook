import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { PrivateRoute } from '../PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute';
import { useAuth } from '../../hooks/useAuth';
import { Wrapper } from './App.styled';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/Contacts'));

export const App = () => {
  const { isRefreshing } = useAuth();

  return isRefreshing ? (
    <p>Is refresching...</p>
  ) : (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Layout />}>
          {}
          <Route index element={<Home />} />
          {}
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/login" component={<Register />} />
            }
          />
          {}
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          {}
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
        {}
        <Route path="*" element={<Home />} />
      </Routes>
    </Wrapper>
  );
};
