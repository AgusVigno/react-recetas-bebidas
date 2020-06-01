import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoRecetas from './components/ListadoRecetas';
import CategoriaProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';
import ModalProvider from './context/ModalContext';

function App() {
	return (
		<CategoriaProvider>
			<RecetasProvider>
				<ModalProvider>
					<Header />
					<div className="container mt-5">
						<div className="row">
							<Formulario />
						</div>

						<ListadoRecetas />
					</div>
				</ModalProvider>
			</RecetasProvider>
		</CategoriaProvider>
	);
}

export default App;
