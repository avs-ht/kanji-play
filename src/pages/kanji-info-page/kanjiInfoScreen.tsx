const KanjiInfoScreen: React.FC<{kanjiInfo: any}> = ({kanjiInfo}) => {
    return (
        <>
        <div className={'1'}>{kanjiInfo}</div>
            Meaning: {kanjiInfo}
        </>
    )
}

export default KanjiInfoScreen;