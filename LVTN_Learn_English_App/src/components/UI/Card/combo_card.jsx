import Card from '../Card/card'
import '../Card/card.styles.css' 
export default function Combo_Card(){
    return(
    <div className="combo-card">
      <Card title="Card 1" />
      <Card title="Card 2" />
      <Card title="Card 3" />
      <Card title="Card 4" />
    </div>
        
    );
}