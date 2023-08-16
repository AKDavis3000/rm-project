import Image from 'next/legacy/image';
import Grid from '../components/Grid';
import '../scss/styles.scss';
import { randomCards } from '@/assets/gameInfo';

export default function Game() {
  return (
    <>
      <section className="grid_section_wrapper">
        {/* <div className="start_wrapper overlay">
          <p className="start_button">Click to start</p>
        </div>
        <div className="winner_wrapper overlay">
          <p className="winner">Winner!</p>
        </div>
        <div className="loser_wrapper overlay">
          <p className="loser">Loser!</p>
        </div> */}
        {randomCards.map((card, i) => {
          <Grid
            card={card}
            key={i}
          />;
        })}
      </section>
    </>
  );
}
