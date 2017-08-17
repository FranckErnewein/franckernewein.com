export default function Ofuscate(props){
  return typeof window === 'undefined' ? null : props.children;
}
