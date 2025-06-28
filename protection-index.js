// Anti-Inspect Protection
const antiInspect = () => {
    // Anti Open Dev tool
    const blockDevTools = () => {
        const devtoolsKeys = {
            F12: true,
            Ctrl_Shift_I: true,
            Ctrl_Shift_J: true,
            Ctrl_Shift_C: true,
            Ctrl_U: true
        };

        document.addEventListener('keydown', (e) => {
            const key = e.key.toUpperCase();
            const ctrlShift = e.ctrlKey && e.shiftKey;
            
            if (key === 'F12' || 
                (ctrlShift && key === 'I') ||
                (ctrlShift && key === 'J') ||
                (ctrlShift && key === 'C') ||
                (e.ctrlKey && key === 'U')) {
                e.preventDefault();
                e.stopPropagation();
                alert('❌ This action is not permitted for security reasons');
                window.location.href = "about:blank";
            }
        });

        // Anti Open console.log
        const originalConsole = console.log;
        console.log = function() {
            originalConsole.apply(console, ["🔒 Access to developer tools blocked"]);
            return false;
        };
    };

    // Advanced browser scanning protection
    const detectDevTools = () => {
        const devtools = /./;
        devtools.toString = function() {
            document.body.innerHTML = '<h1 style="color:white;text-align:center;">An unauthorized wipe attempt has been detected</h1>';
            window.location.reload();
            return '';
        };
        console.log('%c', devtools);
    };

    blockDevTools();
    detectDevTools();
};

// Advanced Web Protection 
const advancedProtection = () => {
    // Anti Copy Text
    document.addEventListener('copy', (e) => {
        e.preventDefault();
        alert('⛔ Copying is not permitted on this site');
    });

    // Prevent right-clicking
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        alert('⛔ This action is not allowed');
    });

    // Anti ScreenShot
    document.addEventListener('keyup', (e) => {
        if (e.key === 'PrintScreen') {
            navigator.clipboard.writeText('');
            alert('⛔ Screenshots are not allowed');
        }
    });

    // Anti iframe
    if (window !== window.top) {
        window.top.location = window.location;
    }
};

// DDOS Protection
const ddosProtection = () => {
    const config = {
        maxRequests: 20,       // Maximum orders
        timeWindow: 10000,     // Time window in milliseconds (10 seconds)
        banTime: 30000         // Block duration in milliseconds (30 seconds)
    };

    let requestCount = 0;
    let isBanned = false;

    // Increase the counter with each request
    const incrementCounter = () => {
        requestCount++;
        if (requestCount > config.maxRequests && !isBanned) {
            blockUser();
        }
    };

    // Bannd User
    const blockUser = () => {
        isBanned = true;
        document.body.innerHTML = `
            <div style="color:white; text-align:center; margin-top:50px;">
                <h1>⏳ You have been temporarily blocked.ً</h1>
                <p>You have exceeded the number of allowed requests</p>
                <p>The ban will be canceled after${config.banTime/1000} S</p>
            </div>
        `;
        
        setTimeout(() => {
            isBanned = false;
            requestCount = 0;
            window.location.reload();
        }, config.banTime);
    };

    // Reset the counter regularly.
    setInterval(() => {
        if (!isBanned) {
            requestCount = 0;
        }
    }, config.timeWindow);

    // Monitor download events
    window.addEventListener('load', incrementCounter);
    document.addEventListener('click', incrementCounter);
};

// Open sys Protection
const initProtection = () => {
    antiInspect();
    advancedProtection();
    ddosProtection();
    
    // Login Open Protection
    console.log('🛡️ The protection system has been activated successfully | BONAXZE');
};

// Open Protection in Page
window.addEventListener('DOMContentLoaded', initProtection);
// Protection By BONAXZE
