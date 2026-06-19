import { ImageResponse } from "next/og";
import { appName } from "@/lib/utils";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image(){ return new ImageResponse(<div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",padding:80,background:"linear-gradient(135deg,#0f1021,#4f46e5)",color:"white"}}><div style={{fontSize:72,fontWeight:900}}>{appName}</div><div style={{fontSize:34,marginTop:20}}>Discover, compare, and stack the best everyday tools.</div></div>, size); }
