import "./EmptyState.css";
import { RiStickyNoteLine } from "react-icons/ri";

function EmptyState() {
  return (
    <div className="empty-state">

      <RiStickyNoteLine />

      <h2>Belum ada catatan</h2>

      <p>
        Tekan tombol + untuk membuat
        catatan pertamamu.
      </p>

    </div>
  );
}

export default EmptyState;