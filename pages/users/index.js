import { Row, Col, Button, Tooltip } from 'antd';
import App from "../../src/components/layout/app";
import TableSystem from '../../src/components/table';
import Link from "next/link";
import {
	DeleteTwoTone,
	EyeTwoTone,
	EditTwoTone
	} from '@ant-design/icons';

const UserList = () => {
	const routes = [
		{
			key: '1',
			path: '/users/',
			breadcrumbName: 'Usuarios',
		}
	];

	const data = [
		{
			key: '1',
			name: 'Alejandro',
			last_name: 'Sanchez',
			phone: '+56 53453453',
			email: 'alejandrosanchez@test.com',
			address: 'Chile',
		},
		{
			key: '2',
			name: 'Elver',
			last_name: 'Valderrama',
			phone: '+56 942342342',
			email: 'elvervalderrama@test.com',
			address: 'Chile',
		},
		{
			key: '3',
			name: 'José',
			last_name: 'Artigas',
			phone: '+58 534534534',
			email: 'joseartigas@test.com',
			address: 'Venezuela',
		},
	];

	const columns = [
		{
			title: 'Nombre',
			dataIndex: 'name',
			key: 'name',
			search: true,
		},
		{
			title: 'Apellido',
			dataIndex: 'last_name',
			key: 'last_name',
			search: true,
		},
		{
			title: 'Teléfono',
			dataIndex: 'phone',
			key: 'phone',
			search: true,
		},
		{
			title: 'Correo E.',
			dataIndex: 'email',
			key: 'email',
			search: true,
		},
		{
			title: 'Dirección',
			dataIndex: 'address',
			key: 'address',
			search: true,
		},
		{
			title: 'Acción',
			dataIndex: 'key',
			key: 'key',
			search: false,
			width: '10%',
			render: (key) => {
				return (
					<Row gutter={[8, 0]} justify="center">
						<Col>
							<Link href="#" >
								<Tooltip title="Ver Detalle!" color={'cyan'}>
									<EyeTwoTone twoToneColor="#13c2c2" style={{ fontSize: '16px'}}/>
								</Tooltip>
							</Link>
						</Col>
						<Col>
							<Link href="#" >
								<Tooltip title="Editar!" color={'orange'}>
									<EditTwoTone twoToneColor="#fa8c16" style={{ fontSize: '16px'}}/>
								</Tooltip>
							</Link>
						</Col>
						<Col>
							<Link href="#" >
								<Tooltip title="Eliminar!" color={'red'}>
									<DeleteTwoTone twoToneColor="#ff0000" style={{ fontSize: '16px'}}/>
								</Tooltip>
							</Link>
						</Col>
					</Row>
				)
			}
		},
	];

	return (
		<App routes={routes}>
			<Row gutter={[8, 16]} justify="end">
				<Col>
					<Link href="/users/add">
						<Button type="primary" size="small">NUEVO USUARIO</Button>
					</Link>
				</Col>
			</Row>
			
			<TableSystem columns={columns} data={data}/>
		</App>
	);
}

export default UserList;