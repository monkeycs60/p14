import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import EmployeeList from './pages/EmployeeList/EmployeeList.tsx';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Index />} />
			<Route path='/employee-list' element={<EmployeeList />} />
			<Route
				path='/test'
				element={
					<div className='m-auto mt-8 flex w-2/3 max-w-7xl flex-col gap-8 '>
						<h1 className='text-center font-times text-3xl font-bold'>
							HELLO FROM TEST
						</h1>
					</div>
				}
			/>
		</Routes>
	);
}

export default App;
