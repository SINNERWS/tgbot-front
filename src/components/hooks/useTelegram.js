const tg = window.Telegram.WebApp

export function useTelegram() {
    
    const onClose = () => { 
        tg.close()
        }

        const onToggleButton = () => {  
            if(tg.MainButton.isVisivle) {   
                tg.MainButton.hide();
            } else {    
                tg.MainButton.show();
            }
        }
    return {  
        onclose,  
        onToggleButton,
        tg,
        user:tg.initDataUnsafe?.user,
    }
}