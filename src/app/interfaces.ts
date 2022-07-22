export interface Persona {
	dni?: string;
	nombres?: string;
	apellido_paterno?: string;
	apellido_materno?: string;
	nro_celular?: string;
	correo?: string;
}

export interface TipoServicio {
	codigoTipoServicio?: number;
	nombreTipoServicio?: string;
}

export interface ListaTipoServicio {
	lista: TipoServicio[];
}

export interface NombreServicio {
	codigoNombreServicio?: number;
	nombreServicio?: string;
}

export interface ListaNombreServicio {
	listaNombreServicio: NombreServicio[];
}

export interface TipoCarga {
	codigoTipoCarga?: number;
	nombreTipoCarga?: string;
}

export interface ListaTipoCarga {
	listaTipoCarga: TipoCarga[];
}

export interface Usuario {
	cod_usuario?: string;
	contrasenia?: string;
}


export interface Usuario {
	cod_usuario?: string;
	contrasenia?: string;
}

export interface UsuarioLogin {
	correo?: string;
	contrasenia?: string;
}

export interface UsuarioNuevo {
	dni?: string;
	correo?: string;
	nombres?: string;
	apellido_paterno?: string;
	apellido_materno?: string;
	nro_celular?: string;
	contrasenia?: string;
}

export interface Cotizacion {
	servicio?: string;
	nombreService?: string;
	tipoCarga?: string;
	domicilioRetiro?: string;
	domicilioEnvio?: string;
	peso?: Number;
	volumen?: Number;
	observaciones?: string;
	correo?: string
}

export interface Servicio {
	selectedValueTipoServicio?: string;
	selectedValueNombreServicio?: string;
	selectedValueTipoCarga?: string;
	codigoServicio?: number;
	nombreServicio?: string;
	tipoServicio?: string;
}

export interface Carga {
	selectedValueTipoServicio?: string;
	selectedValueNombreServicio?: string;
	selectedValueTipoCarga?: string;
	codigoCarga?: number;
	tipoCarga?: string;
	domicilio_envio?: string;
	peso?: Number;
	volumen?: Number;
}


export interface CotizacionUser {
	id?: number;
	domicilioEnvio?: string;
	domicilioRetiro?: string;

}

export interface ListaCotizacionUser {
	listaCotizacionUsuario: CotizacionUser[];
}
export interface EstadoEntrega {
	estado_entrega?: string;
	origen?: string;
	destino?: string;
	recepcion?: string;
	destinatario?: string;
	contenido?: number;
}
export interface RegistroPago {
	codigo_pago?: number;
	nro_venta?: number;
}