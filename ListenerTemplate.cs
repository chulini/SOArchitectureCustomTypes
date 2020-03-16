using SO_Architecture;
using UnityEngine;

namespace ScriptableObjectArchitecture
{
    [AddComponentMenu(SOArchitecture_Utility.EVENT_LISTENER_SUBMENU + "__CustomClass__ Event Listener")]
    public sealed class __CustomClass__GameEventListener : BaseGameEventListener<__CustomClass__, __CustomClass__GameEvent, __CustomClass__UnityEvent>
    {
    }
}