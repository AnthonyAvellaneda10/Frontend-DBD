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

//
export interface PersonaReclamo{
    id_persona ?: number;
    dni?: String;
    correo ?: String;
    nombres ?: String;
    apellido_paterno ?: String;
    apellido_materno ?: String;
    nro_celular ?: String

}

export interface PersonalReclamo{
    codigo_personal ?: String;
    contrasenia ?: String;
    cargo ?: String;
    tipo_usuario ?: String;
    persona?: PersonaReclamo;

}

export interface Reclamo{
    tipo_reclamo ?: String;
    descripcion ?: String;
    rpta_reclamo ?: String;
    servicioTransporte ?: ServicioTransporte ;
    personal ?: PersonalReclamo;
}

export interface ServicioTransporte{
    nombre_servicio ?: String;
    tipo_servicio ?: String;
    usuario ?: UsuarioReclamo;
}

export interface UsuarioReclamo{
    cod_usuario ?: String;
    contrasenia ?: String;
    tipo_usuario ?: String;
    persona ?: PersonaReclamo
}

export interface TipoReclamo{
	codigotipoReclamo?:number;
	nombreTipoReclamo?:string;
}

export interface ListaTipoReclamo{
	listaTipoReclamo: TipoReclamo [];
}

export interface ReclamoUser{
	descripcion?:string;
	rpta_reclamo?:string;
}

export interface ListaReclamoUser{
	listaReclamoUsuario: ReclamoUser [];
}
//