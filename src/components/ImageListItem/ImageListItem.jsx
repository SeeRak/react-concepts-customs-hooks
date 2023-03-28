import { saveAs } from 'file-saver';
import style from './style.module.css'

export function ImageListItem({img}){

    async function downloadImage(){
        const resp = await fetch(img.download_url);
        const blob = await resp.blob();
        saveAs(blob, img.author+"_"+img.id);
    }

    return(
        <div className={style.card}>
            <a href={img.url}>
                <img src={img.download_url} className={style.img} alt="" />
            </a>
            <div className={style.card_banner}>
                <img src={img.download_url} className={style.card_thumb} />
                <div className={style.card_texte}>
                    <h3 className={style.card_title}>{img.author}</h3>
                    <div className={style.card_status}>
                        Original size : {img.height}x{img.width}
                    </div>
                    <button onClick={downloadImage}>
                        Download
                    </button>
                </div>
            </div>
        </div>
    )
}