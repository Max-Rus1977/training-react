import { useRouteError } from 'react-router-dom'
import cl from './ErrorPage.module.css'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className={cl.boxErrorPage}>
      <h1 className={cl.title}>Oops!</h1>
      <p className={cl.text}>Sorry, an unexpected error has occurred.</p>
      <p>
        <i className={cl.errorText}>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}