import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import EmployeeList from './pages/EmployeeList/EmployeeList.tsx';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Index />} />
			<Route path='/employee-list' element={<EmployeeList />} />
		</Routes>
	);
}

export default App;
