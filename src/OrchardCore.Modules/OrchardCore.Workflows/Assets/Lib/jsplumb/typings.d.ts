///<reference path="../../../../OrchardCore.Resources/Assets/jQuery/Typings/jquery-latest.d.ts" />
declare var jsPlumb: jsPlumbInstance;

interface jsPlumbInstance {
    setRenderMode(renderMode: string): string;
    bind(event: string, callback: (connection: any, e: any) => void): void;
    unbind(event?: string): void;
    ready(callback: () => void): void;
    importDefaults(defaults: Defaults): void;
    Defaults: Defaults;
    restoreDefaults(): void;
    addClass(el: any, clazz: string): void;
    addEndpoint(ep: any, source: EndpointOptions, sourceOptions?: SourceOptions): any;
    removeClass(el: any, clazz: string): void;
    hasClass(el: any, clazz: string): void;
    draggable(el: any, options?: DragOptions): jsPlumbInstance;
    draggable(ids: string[], options?: DragOptions): jsPlumbInstance;
    connect(connection: ConnectParams, referenceParams?: ConnectParams): Connection;
    makeSource(el: any, options: SourceOptions): void;
    makeTarget(el: any, options: TargetOptions): void;
    repaintEverything(): void;
    detachEveryConnection(): void;
    detachAllConnections(el: string): void;
    removeAllEndpoints(el: string, recurse?: boolean): jsPlumbInstance;
    removeAllEndpoints(el: Element, recurse?: boolean): jsPlumbInstance;
    select(params: SelectParams): Connections;
    getConnections(options?: any, flat?: any): any[];
    deleteEndpoint(uuid: string, doNotRepaintAfterwards?: boolean): jsPlumbInstance;
    deleteEndpoint(endpoint: Endpoint, doNotRepaintAfterwards?: boolean): jsPlumbInstance;
    deleteConnection(connection: Connection): jsPlumbInstance;
    repaint(el: string): jsPlumbInstance;
    repaint(el: Element): jsPlumbInstance;
    getInstance(): jsPlumbInstance;
    getInstance(defaults: Defaults): jsPlumbInstance;
    getInstanceIndex(): number;
    registerConnectionType(name: string, type: ConnectionType): jsPlumbInstance;
    batch(func: Function): jsPlumbInstance;
    getSelector(sel: string): any;

    SVG: string;
    CANVAS: string;
    VML: string;
}

interface Defaults {
    Endpoint?: any[];
    PaintStyle?: PaintStyle;
    HoverPaintStyle?: PaintStyle;
    ConnectionsDetachable?: boolean;
    ReattachConnections?: boolean;
    ConnectionOverlays?: any[][];
    Container?: any; // string(selector or id) or element
    DragOptions?: DragOptions;
}

interface ConnectionType {
    connector: string,
    paintStyle: PaintStyle,
    hoverPaintStyle: PaintStyle,
    overlays: Array<string>
}

interface PaintStyle {
    fill?: string;
    radius?: number;
    stroke?: string;
    strokeWidth?: number;
    joinstyle?: string;
    outlineStroke?: string;
    outlineWidth?: number;
}

interface Overlay {
    setLabel(label: string): void;
}

interface ArrowOverlay extends Overlay {
    location: number;
    id: string;
    length: number;
    foldback: number;
}

interface LabelOverlay extends Overlay {
    label: string;
    id: string;
    location: number;
}

interface Connections {
    detach(): void;
    length: number;
}

interface ConnectParams {
    source?: any; // string, element or endpoint
    target?: any; // string, element or endpoint
    detachable?: boolean;
    deleteEndpointsOnDetach?: boolean;
    endPoint?: string;
    anchor?: string;
    anchors?: any[];
    label?: string;
    uuids: Array<string>;
    editable: boolean;
}

interface DragOptions {
    scope?: string;
    cursor?: string;
    zIndex?: number;
    grid?: Array<number>;
}

interface SourceOptions {
    parent?: string;
    endpoint?: string;
    anchor?: string;
    connector?: any[];
    connectorStyle?: PaintStyle;
    uuid?: string;
    overlays?: Array<any>;
}

interface TargetOptions {
    isTarget?: boolean;
    maxConnections?: number;
    uniqueEndpoint?: boolean;
    deleteEndpointsOnDetach?: boolean;
    endpoint?: any;
    dropOptions?: DropOptions;
    anchor?: any;
}

interface EndpointOptions {
    endpoint?: string;
    anchor?: string;
    paintStyle?: PaintStyle;
    isSource?: boolean;
    connector?: Array<any>;
    connectorStyle?: PaintStyle;
    hoverPaintStyle?: PaintStyle;
    connectorHoverStyle?: PaintStyle;
    dragOptions?: DragOptions;
    overlays: Array<any>;
    parameters: any;
}

interface DropOptions {
    hoverClass: string;
}

interface SelectParams {
    scope?: string;
    source: string;
    target: string;
}

interface Connection {
    setDetachable(detachable: boolean): void;
    setParameter<T>(name: string, value: T): void;
    endpoints: Endpoint[];
    getOverlay(name: string): Overlay;
    getParameters(): any;
    sourceId: string;
    targetId: string;
}

interface Endpoint {
    getParameters(): any;
}