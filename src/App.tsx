import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Index from './pages/Index';
// import EmployeeList from './pages/EmployeeList/EmployeeList.tsx';

const Index = lazy(() => import('./pages/Index'));
const EmployeeList = lazy(() => import('./pages/EmployeeList/EmployeeList.tsx'));

function App() {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<Suspense fallback={<div>Loading...</div>}>
						<Index />
					</Suspense>
				}
			/>
			<Route
				path='/employee-list'
				element={
					<Suspense fallback={<div>Loading...</div>}>
						<EmployeeList />
					</Suspense>
				}
			/>
		</Routes>
	);
}

export default App;
