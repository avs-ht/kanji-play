import { KanjiInfo } from '@/types/kanjiInfoObject';
import axios from 'axios';

const TEMPLATE_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2c6b13134dmsh6320e9c610c1316p12bfb8jsn0d1faea89f33',
		'X-RapidAPI-Host': 'kanjialive-api.p.rapidapi.com'
	}
};

const getURL : (kanji : string) => string = kanji => encodeURI(`https://kanjialive-api.p.rapidapi.com/api/public/kanji/${kanji}`)

export async function fetchKanjiInfo(kanji: string) : Promise<KanjiInfo>{
	const options = JSON.parse(JSON.stringify(TEMPLATE_OPTIONS));
	options.url = getURL(kanji)
	const {data} : {data: KanjiInfo} = await axios.request(options);
	return data
}