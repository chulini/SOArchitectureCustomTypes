using SO_Architecture;
using UnityEngine;

namespace ScriptableObjectArchitecture
{
    [System.Serializable]
    [CreateAssetMenu(
        fileName = "__CustomClass__GameEvent.asset",
        menuName = SOArchitecture_Utility.ADVANCED_GAME_EVENT + "__CustomClass__",
        order = SOArchitecture_Utility.ASSET_MENU_ORDER_EVENTS + 9)]
    public sealed class __CustomClass__GameEvent : GameEventBase<__CustomClass__> { } 
}