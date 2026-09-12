export type Alignment = 'right' | 'center' | 'left';
export type Mirror = 'none' | 'horizontal' | 'vertical' | 'both';
export interface Settings { fontSize:number; speed:number; lineHeight:number; letterSpacing:number; textColor:string; backgroundColor:string; sideMargin:number; alignment:Alignment; mirror:Mirror; guide:boolean; guidePosition:number; guideOpacity:number; countdown:boolean; cameraMode:'off'|'background'|'floating'; }
export const defaults: Settings = { fontSize:58, speed:10, lineHeight:1.8, letterSpacing:0, textColor:'#f1f8f7', backgroundColor:'#070b0e', sideMargin:8, alignment:'right', mirror:'none', guide:false, guidePosition:48, guideOpacity:0.55, countdown:true, cameraMode:'off' };
