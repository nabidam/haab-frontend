import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';


function App() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          if (credentialResponse.credential) {
            const decoded = jwtDecode(credentialResponse.credential);

            console.log({ credentialResponse, decoded });
          } else {
            console.log('error', credentialResponse);
          }
        }}
        onError={() => {
          console.log('Login Failed');
        }}
        useOneTap
      />
      ;
    </div>
  );
}

export default App;
