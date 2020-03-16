using SO_Architecture;
using UnityEngine;

namespace ScriptableObjectArchitecture
{
    [CreateAssetMenu(
        fileName = "__CustomClass__Collection.asset",
        menuName = SOArchitecture_Utility.COLLECTION_SUBMENU + "__CustomClass__",
        order = SOArchitecture_Utility.ASSET_MENU_ORDER_COLLECTIONS + 3)]
    public class __CustomClass__Collection : Collection<__CustomClass__>
    {
    } 
}
