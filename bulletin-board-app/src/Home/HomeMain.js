import logo from './../logo.svg';
import './../sass/App.scss';
import './../sass/SignMain.scss';
// import SignForm from './SignForm';

function App() {
  return ( 
      <main className="home-main">
          <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-8">
                <div>
                <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Sign in to your account
                </h2>
                <p class="mt-2 text-center text-sm text-gray-600">
                    Or
                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                    start your 14-day free trial
                    </a>
                </p>
                </div>
                
            </div>
        </div>
      </main>
  );
}

export default App;
