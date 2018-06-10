/**
 * Created by pdd on 2018/6/10.
 */


export function getCookie(cname)
{
    var name = cname + "=";
    var ca = window.document.cookie.split(';');
    for(var i=0; i<ca.length; i++)
    {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
}